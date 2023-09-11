import studentInfoReducer, {
  StudentInfoState,
  ageSubmitted,
  nameSubmitted,
} from "./studentInfoSlice"

describe("studentInfoSlice", () => {
  const initialState: StudentInfoState = {}

  it("should store submitted name", () => {
    const name = "submitted name"
    expect(
      studentInfoReducer(initialState, nameSubmitted(name)),
    ).toEqual<StudentInfoState>({
      name,
    })
  })

  it("should store submitted age", () => {
    const age = 18
    expect(
      studentInfoReducer(initialState, ageSubmitted(age)),
    ).toEqual<StudentInfoState>({
      age,
    })
  })
})
