import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

router.get('/getAll', async (req:any, res:any) => {
    const equipmentCategories = await prisma.equipmentCategory.findMany();
    res.json(equipmentCategories);
});

router.get('/get/:id', async (req:any, res:any) => {
    const equipmentCategory = await prisma.equipmentCategory.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(equipmentCategory);
});

router.post('/create', async (req:any, res:any) => {
    const equipmentCategory = await prisma.equipmentCategory.create({
        data: {
            name: req.body.name,
        },
    });
    res.json(equipmentCategory);
});

router.put('/update/:id', async (req:any, res:any) => {
    const equipmentCategory = await prisma.equipmentCategory.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            name: req.body.name,
        },
    });
    res.json(equipmentCategory);
});

router.delete('/delete/:id', async (req:any, res:any) => {
    const equipmentCategory = await prisma.equipmentCategory.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(equipmentCategory);
});




export default router;
