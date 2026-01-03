type OptionProps = {
  title: string
  description: string
  imageUrl: string
  url: string
}

type FirmTutorialsVideoProps = {
  step: number | null
  handleStep: (action: "next" | "prev") => void
}