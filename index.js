const express = require('express')
const app = express()
app.use(express.json())

const authUser = require('./router/user.route')

app.get('/', (req, res) => {
    res.status(200).json({
        "sucess": true,
        "message": "Loaded sucessfully"
    })
})


app.use('/auth', authUser)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
    
})