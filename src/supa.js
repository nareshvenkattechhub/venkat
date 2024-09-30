import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


const url='https://psjbkpyuqimrulakiuop.supabase.co'
const key ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzamJrcHl1cWltcnVsYWtpdW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxOTg4NjMsImV4cCI6MjA0MDc3NDg2M30.9ujKs2OHqeQIM8tB28McK9Z6lcp0ar9LFJavPjxMGTo'

const supabase = createClient(url, key)

export default function Sup() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged in!</div>)
  }
}