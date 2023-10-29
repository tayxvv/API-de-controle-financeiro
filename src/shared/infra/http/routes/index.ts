import { Router } from "express";
import { homeRoutes } from "./home.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticateUser.routes";
import { contaBancariaRoutes } from "./contas.routes";
import { transferenciaRoutes } from "./transferencia.routes";
import { contasTiposRoutes } from "./contaTipo.routes";
import { categoriasRoutes } from "./categorias.routes";
import { tipoTransacaoRoutes } from "./tipoTransacao.routes";

const router = Router();

router.use("/home", homeRoutes);
router.use("/users", usersRoutes);
router.use("/login", authenticateRoutes);
router.use("/conta", contaBancariaRoutes);
router.use("/transferencia", transferenciaRoutes);
router.use("/tipoConta", contasTiposRoutes);
router.use("/categorias", categoriasRoutes);
router.use("/tipoTransacao", tipoTransacaoRoutes);

export { router };
