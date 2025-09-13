const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  POST: 'POST',
} as const

type TMethod = typeof METHODS[keyof typeof METHODS]

type THeaders = Record<string, string>

interface IRequestOptions<D = unknown> {
  timeout?: number
  data?: D
  headers?: THeaders
  method?: TMethod
}

function queryStringify(data: Record<string, string | number | boolean>): string {
  const params = Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&')

  return params ? `?${params}` : ''
}

export class HTTPTransport {
  get<D = unknown>(url: string, options: IRequestOptions<D> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout)
  }

  put<D = unknown>(url: string, options: IRequestOptions<D> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  post<D = unknown>(url: string, options: IRequestOptions<D> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  delete<D = unknown>(url: string, options: IRequestOptions<D> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  private request<D = unknown>(
    url: string,
    options: IRequestOptions<D>,
    timeout = 5000,
  ): Promise<XMLHttpRequest> {
    const { method, data, headers = {} } = options

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('Метод запроса не указан'))
        return
      }

      const xhr = new XMLHttpRequest()

      let finalUrl = url

      if (method === METHODS.GET && data && typeof data === 'object') {
        finalUrl += queryStringify(data as Record<string, string | number | boolean>)
      }

      xhr.open(method, finalUrl)

      xhr.timeout = timeout

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value)
      })

      xhr.onload = () => resolve(xhr)
      xhr.onerror = () => reject(new Error('Ошибка сети'))
      xhr.ontimeout = () => reject(new Error('Превышен таймаут запроса'))

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data))
      }
    })
  }
}
