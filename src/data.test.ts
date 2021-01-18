import { fetch } from "./data";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedResponse: AxiosResponse = {
  data: {
    name: "Henry",
  },
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
};

// it("returns name successfully", async () => {
//   const actual = await fetch();
//   expect(actual.data.name).toBe("Turksat 5A");
// });

it("returns mocked name successfully", async () => {
  mockedAxios.get.mockResolvedValue(mockedResponse);

  expect(axios.get).not.toHaveBeenCalled();

  const actual = await fetch();

  expect(axios.get).toHaveBeenCalled();
  expect(actual.data.name).toEqual("Henry");
});
