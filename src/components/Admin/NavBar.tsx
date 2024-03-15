import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Link from "next/link";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input"
import { IconShoppingCart } from "@tabler/icons-react";

export default function NaveBar() {
  return (
    <><Menubar className="bg-blue-600 justify-center">
      <MenubarMenu>
        <MenubarTrigger>Filter</MenubarTrigger>

        <MenubarContent>
          <Label>Language</Label>
          <MenubarSeparator />
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="r1" />
              <Label htmlFor="r1">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="english" id="r2" />
              <Label htmlFor="r2">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hindi" id="r3" />
              <Label htmlFor="r3">Hindi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sanskrit" id="r4" />
              <Label htmlFor="r4">Sanskrit</Label>
            </div>
          </RadioGroup>

          <MenubarSeparator />
          <Label>Price</Label>
          <MenubarSeparator />
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="r1" />
              <Label htmlFor="r1">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="english" id="r2" />
              <Label htmlFor="r2">₹0-₹50</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hindi" id="r3" />
              <Label htmlFor="r3">₹50-₹100</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sanskrit" id="r4" />
              <Label htmlFor="r4">₹100-₹150</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sanskrit" id="r4" />
              <Label htmlFor="r4">Over ₹150</Label>
            </div>
          </RadioGroup>
          <MenubarSeparator />
          <MenubarSeparator />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Class Book" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <MenubarSeparator />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Class Book" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <MenubarSeparator />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Class Book" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>



        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"/dashboard/edit_product"}>Add Product</Link>
            {/* Undo <MenubarShortcut>⌘Z</MenubarShortcut> */}
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
        <IconShoppingCart/>
      </MenubarMenu>
    </Menubar>
    <Input className="" type="text" placeholder="Search..."/>
    </>
  );
}
