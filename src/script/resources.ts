import {get, post} from "@/script/http_client.ts";
import {getConfigValue} from "@/config.ts";

var resourcesMap : any = null;

const getResourcesMap = async (fetch_data: boolean = false): Promise<any | null> => {
  let resp;
  if (fetch_data) {
    // get resources json url
    const url = getConfigValue('endpoints.mainApi') + "/resources"
    resp = await get(url, {}).then((response) => {
      return response.json();
    }).catch((error) => {
      throw error;
    });
  }
  // let resourcesMap = localStorage.getItem('resourcesMap');
  if (resourcesMap) {
    if (!fetch_data || resourcesMap._version == resp._version) {
      return resourcesMap;
    }
  }
  else if (fetch_data) {
    // get resources map
    resp = await get(resp.url).then((response) => {
      return response.json();
    });
    resourcesMap = resp;
    console.log('Updated resourcesMap');
    return resourcesMap;
  }
  else {
    return null;
  }
}

const getResourceAsync = async (resourceId: string) => {
  if (!resourcesMap) {
    resourcesMap = await getResourcesMap(true);
  }
  let _resource = resourcesMap;
  for (const key in resourceId.split('.')) {
    _resource = _resource[key];
  }
  if (!_resource) {
    throw new Error('Resource not found');
  }
  return getConfigValue('endpoints.cdn') + _resource;
}

const getResource = (resourceId: string) => {
  try {
    return getResourceRaise(resourceId);
  } catch (e) {
    return null;
  }
}

const getResourceRaise = (resourceId: string) => {
  if (!resourcesMap) {
    throw new Error('resourcesMap is not initialized');
  }else {
    let _resource = resourcesMap;
    for (const key of resourceId.split('.')) {
      _resource = _resource[key];
    }
    if (!_resource) {
      throw new Error('Resource not found');
    }
    return getConfigValue('endpoints.cdn') + _resource;
  }
}

export {getResourcesMap, getResource}
