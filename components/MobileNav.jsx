import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify, icons } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursos-pointer"  />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <div>
              <Logo />
            </div>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials
            containerStyles="flex gap-x-4"
            iconsStyles="text-2xl text-primary"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
