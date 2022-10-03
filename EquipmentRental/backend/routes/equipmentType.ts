import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//insert
router.get("/insert", async (req: any, res: any) => {
  const equipmentType = await prisma.equipmentType.create({
    data: {
      name: "Canon Eos 850D",
      description: "Schwarz mit 18-55mm Objektiv und 55-250mm Objektiv",
      EquipmentCategory: {
        connect: {
          id: 5,
        },
      },
    },
  });
  res.json(equipmentType);
});

router.get("/getAll", async (req: any, res: any) => {
  const equipmentTypes = await prisma.equipmentType.findMany();
  res.json(equipmentTypes);
});

router.get("/get/:id", async (req: any, res: any) => {
  const equipmentType = await prisma.equipmentType.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(equipmentType);
});

router.get("/getByName/:name", async (req: any, res: any) => {
  const equipmentType = await prisma.equipmentType.findFirst({
    where: {
      name: {
        equals: req.params.name,
      },
    },
  });
  res.json(equipmentType);
});

router.post("/create", async (req: any, res: any) => {
  const equipmentType = await prisma.equipmentType.create({
    data: {
      name: req.body.name,
      category_id: req.body.category_id,
      description: req.body.description,
    },
  });
  res.json(equipmentType);
});

router.put("/update/:id", async (req: any, res: any) => {
  const equipmentType = await prisma.equipmentType.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      name: req.body.name,
      category_id: req.body.category_id,
    },
  });
  res.json(equipmentType);
});

router.delete("/delete/:id", async (req: any, res: any) => {
  const equipmentType = await prisma.equipmentType.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(equipmentType);
});

export default router;
