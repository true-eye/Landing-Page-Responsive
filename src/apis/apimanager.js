//import AuthStore from './stores/AuthStore'
import axios from "axios";

// const apiUrl = "http://localhost:4040/api/";
const apiUrl = "http://127.0.0.1:4040/api/";

const handleErrors = err => {
  throw err;
};
const responseData = res => res;

const requests = {
  get: (url, headers) =>
    axios({ url: `${apiUrl}${url}`, method: "get", headers })
      .then(responseData)
      .catch(handleErrors),
  post: (url, headers, data) =>
    axios({ url: `${apiUrl}${url}`, method: "post", headers, data })
      .then(responseData)
      .catch(handleErrors),
  //   getAddress: data =>
  //     axios
  //       .get(`${addressApiUrl}${data}?api-key=${addressApiKey}&expand=true`)
  //       .then(responseData)
  //       .catch(handleErrors),
  put: (url, data) =>
    axios
      .put(`${apiUrl}${url}`, data)
      .then(responseData)
      .catch(handleErrors),
  patch: (url, data) =>
    axios
      .patch(`${apiUrl}${url}`, data)
      .then(responseData)
      .catch(handleErrors),
  del: url =>
    axios
      .delete(`${apiUrl}${url}`)
      .then(responseData)
      .catch(handleErrors)
};

export const ApiManager = {
  SignUp: (headers, data) => requests.post(`users`, headers, data)
  //   getToken: headers => requests.get(`Token/GetToken`, headers),
  //   GetFeeBands: (headers, data) =>
  //     requests.post(`Originator/GetFeeBands`, headers, data),
  //   AddCaseNote: (headers, data) =>
  //     requests.post(`Originator/AddCaseNote`, headers, data),
  //   GetCaseInformation: (headers, data) =>
  //     requests.post(`Originator/GetCaseInformation`, headers, data),
  //   GetQuote: (headers, data) =>
  //     requests.post(`Version2/originator/GetQuote`, headers, data),
  //   ChangeSolicitor: (headers, data) =>
  //     requests.post(`Version2/originator/ChangeSolicitor`, headers, data),
  //   ChangeSolicitorWithQuoteNumber: (headers, data) =>
  //     requests.post(
  //       `Version2/originator/ChangeSolicitorWithQuoteNumber`,
  //       headers,
  //       data
  //     ),
  //   SearchQuotes: (headers, data) =>
  //     requests.post(`Originator/SearchQuotes`, headers, data),
  //   CreateQuote: (headers, data) =>
  //     requests.post(`Version2/originator/CreateQuote`, headers, data),
  //   InstructQuote: (headers, data) =>
  //     requests.post(`Originator/InstructQuote`, headers, data),
  //   UploadCaseAttachment: (headers, data) =>
  //     requests.post(`Originator/UploadCaseAttachment`, headers, data),
  //   AddDocument: (headers, data) =>
  //     requests.post(`Originator/AddDocumentToCase`, headers, data),
  //   getAddress: data => requests.getAddress(data)
};
