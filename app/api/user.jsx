import { ENV } from '@/app/utils/constants'

export class User {
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`

            const params = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjkxMTg4OTU0LCJleHAiOjE2OTM3ODA5NTR9.dBGD4vpCOW0iyKiTeXQRdj3CNgX-68MtWZ4Qq9GTzbw'
                },
            };
    
            const response = await fetch(url, params)
            const result = await response.json()
    
            if( response.status !== 200 ) throw result
    
            return result
            
        } catch (error) {
            throw error
        }
    }    
}