import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import Link from '../../../Components/Link/Link';
import Subtitle from '../../../Components/Subtitle/Subtitle';

export default function Step_one({onNext}) {
  return (
    <>
    <Title title="Восстановление пароля" />
    <Input name="newpass" placeholder="Новый пароль" type="password" />
    <Input placeholder="Повторите пароль" type="password" />
    <Button onClick={onNext} />
        <Link href="/*" text="Отменить и перейти к авторизации" />
    </>
  )
}
