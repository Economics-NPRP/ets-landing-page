type OptionProps = {
  title: string
  description: string
  imageUrl: string
  url: string
}

type TutorialsVideoProps = {
  step: number | null
  handleStep: (action: "next" | "prev") => void
}