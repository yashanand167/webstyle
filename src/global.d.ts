declare namespace chrome {
  namespace runtime {
    const lastError: { message: string } | undefined

    const onMessage: {
      addListener(
        callback: (
          message: { type?: string },
          sender: unknown,
          sendResponse: (response?: unknown) => void,
        ) => void,
      ): void
    }
  }

  namespace tabs {
    type Tab = {
      id?: number
      url?: string
    }

    function query(
      queryInfo: Record<string, unknown>,
      callback: (tabs: Tab[]) => void,
    ): void
  }

  namespace scripting {
    function executeScript(
      injection: {
        target: { tabId: number }
        func: (...args: unknown[]) => void
        args: unknown[]
      },
      callback?: () => void,
    ): void
  }

  namespace storage {
    namespace local {
      function get(
        keys: string | string[] | Record<string, unknown> | null,
        callback: (items: Record<string, unknown>) => void,
      ): void
      function set(
        items: Record<string, unknown>,
        callback?: () => void,
      ): void
      function remove(keys: string | string[], callback?: () => void): void
    }

    const onChanged: {
      addListener(
        callback: (
          changes: Record<string, { oldValue?: unknown; newValue?: unknown }>,
          areaName: string,
        ) => void,
      ): void
    }
  }
}
