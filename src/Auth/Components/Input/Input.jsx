import './css/input.css'

function Input({name, placeholder, type}) {
  return (
    <>
        <input className="form__input" name={name} placeholder={placeholder} type={type} required />
    </>
  );
}

export default Input;