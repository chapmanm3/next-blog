"use client"

interface Props {
  text: string;
  className: string
}

export default function BackButton({ text, className }: Props) {

  const onBackClick = () => {
    window.history.back()
  }

  return (
    <div className={className} onClick={onBackClick}>{text}</div>
  )
}
