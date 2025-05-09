import { Metadata } from "next";
import Resume from "../../components/Resume/resume";


export const metadata: Metadata = {
  title: "Matt Chapman's Resume Page",
  description: "My resume page with dropdowns containing my work experience, current tech stack, and education"
}

export default async function ResumePage() {
  return(
    <Resume />
  )
}
