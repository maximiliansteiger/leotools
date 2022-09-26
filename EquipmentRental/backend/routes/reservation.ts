import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

router.get('/getAll', async (req:any, res:any) => {
    const reservations = await prisma.reservation.findMany({
        include: {
            equipment: true,
            user: true
        },
    });
    res.json(reservations);
});

router.get('/get/:id', async (req:any, res:any) => {
    const reservation = await prisma.reservation.findUnique({
        where: {
            id: Number(req.params.id),
        },
        include: {
            equipment: true,
            user: true
        },
    });
    res.json(reservation);
});

router.post('/create/', async (req:any, res:any) => {
    const reservation = await prisma.reservation.create({
        data: {
            userId: req.body.userId,
            equipmentId: req.body.equipmentId,
            statusId: req.body.statusId,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        },
    });
    res.json(reservation);
});

router.put('/update/:id', async (req:any, res:any) => {
    const reservation = await prisma.reservation.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            userId: req.body.userId,
            equipmentId: req.body.equipmentId,
            statusId: req.body.statusId,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        },
    });
    res.json(reservation);
});

router.delete('/delete/:id', async (req:any, res:any) => {
    const reservation = await prisma.reservation.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(reservation);
});

export default router;