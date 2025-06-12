export const usePopupStore = defineStore("popup", () => {
  // State for authentication
  const { data: signedIn } = useBrowserLocalStorage("signedIn", false)
  
  // State for clinic selection
  const { data: selectedClinic } = useBrowserLocalStorage("selectedClinic", "")
  
  // User data (optional, for when signed in)
  const { data: user } = useBrowserLocalStorage<{
    username?: string
    email?: string
  }>("user", {})

  // Actions
  const signIn = (username: string, password: string) => {
    // Here you would typically validate credentials
    // For now, we'll just set signedIn to true
    signedIn.value = true
    user.value = { username }
    // Reset clinic selection when signing in
    selectedClinic.value = ""
  }

  const signOut = () => {
    signedIn.value = false
    user.value = {}
    selectedClinic.value = ""
  }

  const selectClinic = (clinic: string) => {
    selectedClinic.value = clinic
  }

  return {
    signedIn,
    selectedClinic,
    user,
    signIn,
    signOut,
    selectClinic,
  }
})
