export interface HyperAgentDebugOptions {
  cdpSessions?: boolean;
  traceWait?: boolean;
  profileDomCapture?: boolean;
  structuredSchema?: boolean;
}

let currentDebugOptions: HyperAgentDebugOptions = {};
let debugOptionsEnabled = false;

export function setDebugOptions(
  options?: HyperAgentDebugOptions,
  enabled = false
): void {
  currentDebugOptions = options ?? {};
  debugOptionsEnabled = enabled;
}

export function getDebugOptions(): HyperAgentDebugOptions & { enabled: boolean } {
  return { ...currentDebugOptions, enabled: debugOptionsEnabled };
}

/**
 * Returns the raw AGENT_RUN_CACHE_<suffix> value when it is set and non-empty,
 * otherwise the raw legacy HYPERAGENT_<suffix> value.
 */
export function readDebugEnv(
  suffix: "PROFILE_DOM" | "TRACE_WAIT" | "DEBUG_STRUCTURED_SCHEMA"
): string | undefined {
  const value = process.env[`AGENT_RUN_CACHE_${suffix}`];
  return value !== undefined && value !== ""
    ? value
    : process.env[`HYPERAGENT_${suffix}`];
}
