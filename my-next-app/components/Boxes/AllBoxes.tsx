// AllBoxes.tsx
import Box1 from "@/components/Boxes/Box1";
import Box2 from "@/components/Boxes/Box2";
import Box3 from "@/components/Boxes/Box3";
import Box4 from "@/components/Boxes/Box4";
import Box5 from "@/components/Boxes/Box5";
import Box6 from "@/components/Boxes/Box6";
// etc...

export default function AllBoxes() {
  return (
    <div className="flex gap-4">

      <Box1 />
      
      <Box2 />
      <Box3 />
      <Box4 />
        <Box5 />
        <Box6 />
      {/* add more boxes */}
    </div>
  );
}
