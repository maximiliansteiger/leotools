import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
            userNumber: req.body.userNumber,
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

module.exports = router;