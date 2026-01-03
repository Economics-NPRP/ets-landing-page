type OptionProps = {
  title: string
  description: string
  imageUrl: string
  url: string
}

type TutorialsVideoProps = {
  step: number | null
  handleStep: (action: "next" | "prev") => void
  target: "firm" | "government"
}

type TutorialsContentListProps = { 
  step: string | null
  setStep: (step: string) => void
  target: "firm" | "government"
}