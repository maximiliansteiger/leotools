import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

router.get('/insert', async (req: any, res: any) => {
    const equipmentType = await prisma.role.create({
        data: {
            name: "Teacher",
        },
    }
    );
    res.json(equipmentType);
});


router.get('/getAll', async (req:any, res:any) => {
    const roles = await prisma.role.findMany();
    res.json(roles);
});

router.get('/get/:id', async (req:any, res:any) => {
    const role = await prisma.role.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(role);
});

router.post('/create/', async (req:any, res:any) => {
    const role = await prisma.role.create({
        data: {
            name: req.body.name,
        },
    });
    res.json(role);
});

router.put('/update/:id', async (req:any, res:any) => {
    const role = await prisma.role.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            name: req.body.name,
        },
    });
    res.json(role);
});

router.delete('/delete/:id', async (req:any, res:any) => {
    const role = await prisma.role.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(role);
});

export default router;