import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "187ff4d519d2460195f5f1634c6cad2a"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "84bbf1d0a5544d40ab950f2491007f56"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "bf2795acfe7743c98dc63006a3067c82"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "d1f31febdef4437a849d36e74b60fdaa"
                        },
                        "cs1": {
                            "table": "sys_script_client",
                            "id": "ce63499ac0d147028ec4d68368a7f1be"
                        },
                        "br1": {
                            "table": "sys_script",
                            "id": "3865a38376204b64a502e54ac62d861d"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "ceeebc914d3443f0ade853650425db28",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "de72ad68743948e78f594d4d410645e4",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "d656e621966f49dbb4595391f25132da",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
