import {
  getAllByPlaceholderText,
  getDefaultNormalizer
} from '@testing-library/react'
import axios from 'axios'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import './styles.scss'

export function Main() {
  /* city is a variable and setCity is to set a new value in variable. It's like let */
  // const [city, setCity] = useState('')
  // const [state, setState] = useState('')

  const [cep, setCep] = useState('')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [updated, setUpdated] = useState('test')

  async function getData() {
    setIsLoading(true)
    try {
      /* { data } are deconstructing of axios response, or be, response.data = await axios... */
      const { data } = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)

      /* await axios.get and set data.localidade in my state */
      // setCity(data.localidade)

      /* this are getting all data of axios */
      setData(data)
    } catch (error) {
      alert('CEP inválido')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="content">
      <form>
        <Input
          label="Digite seu CEP:"
          width={'40%'}
          placeholder={'Digite seu cep'}
          value={cep}
          onChange={e => setCep(e.target.value)}
          // after of press key
          // onKeyUp={e => console.log(e)}
          type={'submit'}
        />

        {/* if you need pass argument in function, you called like this:
      onClick={() => function(argument)}
      */}
        <Button
          disabled={isLoading}
          title={isLoading ? 'Carregando' : 'Buscar'}
          onClick={getData}
        />
      </form>

      {/* in data initial state localidade is not exists, so I use ? is optional prop

      Validate if uf exists in data
      */}

      <span>{data?.uf && `${data?.localidade}, ${data?.uf} `}</span>
      <span>{`Bairro: ${data?.bairro}`}</span>
    </main>
  )
}
