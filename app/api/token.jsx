import { ENV } from '@/app/utils/constants'

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token)
    }
}