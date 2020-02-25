const BASEURL = 'http://localhost:3000'
const loginUrl = BASEURL + '/login'
const validateUrl = BASEURL + '/validate'
const investorUrl = BASEURL + '/investors'
const scoreUrl = BASEURL + '/quiz_scores'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.token
    }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const login = (name, password) =>
  post(loginUrl, { investor: { name: name, password: password } })

const createAccount = (name, password) =>
  post(investorUrl, { investor: { name: name, password: password } })

const quizScore = (score, InvestorId) =>
  post(scoreUrl, {
    score: score,
    investor_id: InvestorId
  })

const deleteScore = id => {
  fetch('http://localhost:3000/quiz_scores/' + id, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => console.log(res))
}

const patch = (url, data) =>
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const updateAccount = (name, password) =>
  patch(investorUrl, { name: name, password: password })

const validate = () => get(validateUrl)

export default { login, validate, createAccount, post, quizScore, deleteScore, updateAccount }
