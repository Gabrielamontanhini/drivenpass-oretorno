import supertest from "supertest"
import app from "../../src/app"

const server = supertest(app)


describe("create user ", ()=>{
    it("should create a user at post /user", async() => {
      const {statusCode} = await server.post("/user").send({
        "email": "perrinha@gata.com",
        "password": "perrinha123"
      })
    
      expect(statusCode).toBe(201)
    })   
    it("shouldnt create a user at post /user when password is less then 10 characters", async() => {
      const {statusCode} = await server.post("/user").send({
        email: "gato@gato.com",
        password: "123456789"
      })
    
      expect(statusCode).toBe(400)
    })
    it("shouldnt create a user at post /user when email is not an email", async() => {
      const {statusCode} = await server.post("/user").send({
        email: "gato.com",
        password: "12345678910"
      })
    
      expect(statusCode).toBe(400)
    })
})