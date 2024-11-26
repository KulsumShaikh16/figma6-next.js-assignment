import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button className="text-[#FFFFFF] bg-[#000000] text-4 hover:bg-[#000000] hover:text-gray-400 w-[130px] font-normal">Start learning now</Button>
}

// import { Button } from "@/components/ui/button"

export function ButtonOutline() {
  return <Button variant="outline" className="bg-[#FFFFFF] border-none hover:bg-[#FFFFFF] text-4 w-[164px] font-normal ">Explore Courses</Button>
}
