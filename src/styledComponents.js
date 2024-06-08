import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`

export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 35vw;
  padding: 20px;
  background-color: #1a171d;
`
export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 65vw;
  padding: 20px;
  background-color: #000000;
  padding-top: 160px;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: bold;
  margin: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin: 10px;
`

export const LabelText = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  margin: 5px;
`
export const Input = styled.input`
  height: 22px;
  width: 94%;
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: normal;
  padding: 20px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`

export const Select = styled.select`
  height: 45px;
  width: 100%;
  color: #64748b;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  height: 45px;
  width: 150px;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px;
  border-radius: 5px;
`
export const TagsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
`

export const NoTaskText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin: 20px;
`

export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 0px;
`
export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  height: 45px;
  border-radius: 20px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 5px;
  color: #ffffff;
  font=family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  text-align: center;
`

export const TagsListItem = styled.li`
  list-style-type: none;
`

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5px;
  padding-left: 0px;
`
