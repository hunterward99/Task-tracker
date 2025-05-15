import './css/Button.css'

export default function Button({onClick}) {
  return (
    <button className="button" type="submit" onClick={onClick}>
        <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4034 16L9.09091 14.7045L14.4943 9.30114H0.5V7.42614H14.4943L9.09091 2.03977L10.4034 0.727273L18.0398 8.36364L10.4034 16Z"/>
        </svg>
    </button>
  )
}
