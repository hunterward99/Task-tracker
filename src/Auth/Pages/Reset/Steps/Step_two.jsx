import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import Link from '../../../Components/Link/Link';
import Subtitle from '../../../Components/Subtitle/Subtitle';

export default function Step_one({onNext}) {
  return (
    <>
    <Title title="Восстановление пароля" />
    <Subtitle text="На вашу почту был направлен проверочный код для сброса пароля" />
    <Input name="code" placeholder="Проверочный код" type="text" />
    <Button onClick={onNext} />
    <div className='form__nav'>
        <Link href="/*" text="Назад" />
        <Link href="#" text="Отправить повторно" />
    </div>
    </>
  )
}
