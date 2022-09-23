import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

router.get('/getAll', async (req:any, res:any) => {
    const equipments = await prisma.equipment.findMany();
    res.json(equipments);
});

router.get('/get/:id', async (req:any, res:any) => {
    const equipment = await prisma.equipment.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(equipment);
});

router.post('/create/', async (req:any, res:any) => {
    const equipment = await prisma.equipment.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            equipmentTypeId: req.body.equipmentTypeId,
        },
    });
    res.json(equipment);
});

router.put('/update/:id', async (req:any, res:any) => {
    const equipment = await prisma.equipment.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            name: req.body.name,
            description: req.body.description,
            equipmentTypeId: req.body.equipmentTypeId,
        },
    });
    res.json(equipment);
});

router.delete('/delete/:id', async (req:any, res:any) => {
    const equipment = await prisma.equipment.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(equipment);
});

export default router;