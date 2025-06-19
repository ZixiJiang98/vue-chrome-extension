export const usePopupStore = defineStore("popup", () => {
  // State for authentication
  const { data: signedIn, promise: signedInPromise } = useBrowserLocalStorage("signedIn", false)
  
  // State for clinic selection
  const { data: selectedClinic, promise: selectedClinicPromise } = useBrowserLocalStorage("selectedClinic", "")
  
  // User data (optional, for when signed in)
  const { data: user, promise: userPromise } = useBrowserLocalStorage<{
    username?: string
    email?: string
  }>("user", {})

  // Clinic options
  const clinicOptions = ref([
    { id: 1, name: 'Clinic 1', address: '123 Main St' },
    { id: 2, name: 'Clinic 2', address: '456 Oak Ave' },
    { id: 3, name: 'Clinic 3', address: '789 Pine Rd' }
  ])

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
    signedInPromise,
    selectedClinic,
    selectedClinicPromise,
    user,
    userPromise,
    clinicOptions,
    signIn,
    signOut,
    selectClinic,
  }
})
