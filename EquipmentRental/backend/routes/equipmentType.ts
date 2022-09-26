import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// insert
router.get('/insert', async (req: any, res: any) => {
    const equipmentType = await prisma.equipmentType.create({
        data: {
            name: "Sonstiges",
        },
    }
    );
    res.json(equipmentType);
});

router.get('/getAll', async (req: any, res: any) => {
    const equipmentTypes = await prisma.equipmentType.findMany();
    res.json(equipmentTypes);
});

router.get('/get/:id', async (req: any, res: any) => {
    const equipmentType = await prisma.equipmentType.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(equipmentType);
});

router.post('/create/', async (req: any, res: any) => {
    const equipmentType = await prisma.equipmentType.create({
        data: {
            name: req.body.name
        },
    });
    res.json(equipmentType);
});

router.put('/update/:id', async (req: any, res: any) => {
    const equipmentType = await prisma.equipmentType.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            name: req.body.name
        },
    });
    res.json(equipmentType);
});

router.delete('/delete/:id', async (req: any, res: any) => {
    const equipmentType = await prisma.equipmentType.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(equipmentType);
});

export default router;