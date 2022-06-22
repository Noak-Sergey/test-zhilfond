import SuperButton from './SuperButton';

const Button = () => {
    return(
        //есть проблема с параметром type не могу разобраться
        //@ts-ignore
        <SuperButton >
          Button
          <i className='loading'></i>
        </SuperButton>
    )
}

export default Button;