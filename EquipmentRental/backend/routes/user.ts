import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let maxi = {
    firstName: "Maximilian",
    lastName: "Steiger",
    email: "m.steiger@students.htl-leonding.ac.at",
    password: "Maximilian",
    role: {
        connect: {
            id: 1
        }
    }
}

let martin = {
    firstName: "Martin",
    lastName: "Kaar",
    email: "m.kaar@students.htl-leonding.ac.at",
    password: "Martin",
    role: {
        connect: {
            id: 1
        }
    }
}

let teresa = {
    firstName: "Teresa",
    lastName: "Holzer",
    email: "t.holzer@students.htl-leonding.ac.at",
    password: "Teresa",
    role: {
        connect: {
            id: 1
        }
    }
}

let robin = {
    firstName: "Robin",
    lastName: "Reinhart",
    email: "r.reinhart@students.htl-leonding.ac.at",
    password: "Robin",
    role: {
        connect: {
            id: 1
        }
    }
}

// insert
router.get('/insert', async (req: any, res: any) => {
    const equipmentType = await prisma.user.create({
        data: robin
    }
    );
    res.json(equipmentType);
});

router.get('/getAll', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

router.get('/get/:id', async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(user);
});

router.post('/create', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            roleId: req.body.roleId,
        },
    });
    res.json(user);
});

router.put('/update/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            roleId: req.body.roleId,
        },
    });
    res.json(user);
});

router.delete('/delete/:id', async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(user);
});

router.post('/login', async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
    });
    if (user) {
        if (user.password === req.body.password) {
            res.json(user);
        } else {
            res.json({ message: "Wrong password" });
        }
    } else {
        res.json({ message: "User not found" });
    }
});


//mail
require('dotenv').config();
const envFile = process.env;

router.get('/code', async (req, res) => {
    sendMail(req.body.email, "1234");
    res.send("1234")

});

async function sendMail(userMail: string, code: string) {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        name: 'leoTools',
        host: 'mail.schoolutilities.net',
        port: 465,
        secure: true,
        auth: {
            user: envFile.EMAIL_USER,
            pass: envFile.EMAIL_PASSWORD
        },
    });
    const mailOptions = {
        from: envFile.EMAIL_USER,
        to: userMail,
        subject: "Verifikationscode",
        text: "ihr code lautet: " + code,

    };

    await transporter.sendMail(mailOptions)
        .then((info: any) => {
            console.log(info);
        }).catch((err: any) => {
            console.log(err);
        });


}


export default router;