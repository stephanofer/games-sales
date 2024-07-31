import { ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorDetail() {

    const error = useRouteError()

  return (
    <>
    {isRouteErrorResponse(error)? (error as ErrorResponse).statusText : (error as Error).message}
    </>
  )
}
export default ErrorDetail