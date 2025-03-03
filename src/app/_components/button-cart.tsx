import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";

export const ButtonCart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle>Carrinho de Compras</SheetTitle>
          </SheetHeader>

          <div>

          </div>
          
        </div>
        <div>
          <SheetFooter className="flex">
            <Button variant={"secondary"}>Esvaziar Carrinho</Button>
            <Button>Comprar</Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
