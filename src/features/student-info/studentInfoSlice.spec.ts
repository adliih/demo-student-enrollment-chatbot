import studentInfoReducer, {
  StudentInfoState,
  ageSubmitted,
  nameSubmitted,
} from "./studentInfoSlice"

describe("studentInfoSlice", () => {
  const initialState: StudentInfoState = { slot: {} }

  it("should store submitted name", () => {
    const name = "submitted name"
    expect(
      studentInfoReducer(initialState, nameSubmitted(name)),
    ).toEqual<StudentInfoState>(
      expect.objectContaining({
        name,
      } as Partial<StudentInfoState> as StudentInfoState),
    )
  })

  it("should store submitted age", () => {
    const age = 18
    expect(
      studentInfoReducer(initialState, ageSubmitted(age)),
    ).toEqual<StudentInfoState>(
      expect.objectContaining({
        age,
      } as Partial<StudentInfoState> as StudentInfoState),
    )
  })
})
