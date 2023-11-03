import { describe, expect, it, vi } from "vitest"
import fetch from "node-fetch";
import { axiosNews } from "./lib/axios"

const API_KEY = import.meta.env.VITE_API_KEY

const fetchNews = async (q, pg) => {
  try {
    const response = await axiosNews.get(`?q=${q}&api-key=${API_KEY}&page=${pg === null ? 0 : pg}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

// If result error and received "undefined" it was to many request to api. Wait a second and than run test again
describe("Testing fetch news", () => {
  it("Success fetch news status OK", async () => {
    vi.mock("node-fetch");
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ status: "OK" })
      })
    );
    const result = await fetchNews("palestina", 10);
    expect(result?.data?.status).toBe("OK");
  });
});