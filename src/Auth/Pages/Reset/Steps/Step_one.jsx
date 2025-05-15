import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import Link from '../../../Components/Link/Link';

export default function Step_one({onNext}) {
  return (
    <>
    <Title title="Восстановление пароля" />
    <Input name="email" placeholder="Почта" type="email" />
    <Button onClick={onNext} />
    <Link href="/*" text="Назад" />
    </>
  )
}
