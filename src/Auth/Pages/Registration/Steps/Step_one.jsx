import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import Link from '../../../Components/Link/Link';

export default function Step_one({onNext}) {
  return (
    <>
    <Title title="Регистрация аккаунта" />
    <Input name="email" placeholder="Почта" type="email" />
    <Input name="password" placeholder="Пароль" type="password" />
    <Input placeholder="Повторите пароль" type="password" />
    <Button onClick={onNext} />
    <Link href="/*" text="У меня есть аккаунт" />
    </>
  )
}
