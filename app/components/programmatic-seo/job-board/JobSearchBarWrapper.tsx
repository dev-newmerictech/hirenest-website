'use client'

import { useState } from 'react'
import { JobSearchBar } from './JobSearchBar'

export function JobSearchBarWrapper() {
    const [searchValue, setSearchValue] = useState('')
    return <JobSearchBar value={searchValue} onChange={setSearchValue} placeholder="Search for jobs, companies, or keywords..." />
}
