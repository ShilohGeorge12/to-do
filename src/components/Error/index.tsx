import React from 'react';

interface Istate{
  hasError : boolean,
}
interface IerrorBoundry{
  children : React.ReactNode,
}

class ErrorBoundary extends React.Component<IerrorBoundry,Istate> {
  constructor(props: IerrorBoundry){
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error : unknown){
    return { hasError: true }
  }

  render(){
    if(this.state.hasError){
      return (
        <div>
          <p>SomeThing Went Wrong!!</p>
          <p>Please Reload The Page.</p>
        </div>
      )
    }
    return(this.props.children);
  }
}
export default ErrorBoundary;