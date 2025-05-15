import './../../css/general.css';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Title from '../../Components/Title/Title';
import Link from '../../Components/Link/Link';

function Authorization() {
  return (
    <>
      <Title title="Вход в систему" />

      <Input name="email" placeholder="Почта" type="email" />
      <Input name="password" placeholder="Пароль" type="password" />

      <Button />
      <div className="form__nav">
          <Link href="/reset" text="Сбросить пароль" />
          <Link href="/reg" text="Нет аккаунта" />
      </div>
    </>
  );
}

export default Authorization;