export const DEMO_PROJECT: any = {
  blocks: {
    languageVersion: 0,
    blocks: [
      // === Script 1: Flag clicked — draw spiral ===
      {
        type: 'event_flag_clicked',
        id: 'flag1',
        x: 50,
        y: 50,
        inputs: {
          BODY: {
            block: {
              type: 'pen_clear',
              id: 'pen_clear1',
              next: {
                block: {
                  type: 'pen_set_color',
                  id: 'pen_color1',
                  fields: { COLOR: '#ff6b6b' },
                  next: {
                    block: {
                      type: 'pen_set_size',
                      id: 'pen_size1',
                      inputs: {
                        SIZE: {
                          block: {
                            type: 'math_number',
                            id: 'num2',
                            fields: { NUM: 3 }
                          }
                        }
                      },
                      next: {
                        block: {
                          type: 'pen_down',
                          id: 'pendown1',
                          next: {
                            block: {
                              type: 'var_create',
                              id: 'var_create1',
                              fields: { NAME: 'счёт' },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'math_number',
                                    id: 'num3',
                                    fields: { NUM: 0 }
                                  }
                                }
                              },
                              next: {
                                block: {
                                  type: 'var_show',
                                  id: 'var_show1',
                                  fields: { NAME: 'счёт' },
                                  next: {
                                    block: {
                                      type: 'looks_say_for',
                                      id: 'say1',
                                      inputs: {
                                        TEXT: {
                                          block: {
                                            type: 'text',
                                            id: 'text1',
                                            fields: { TEXT: 'Рисую спираль!' }
                                          }
                                        },
                                        SECS: {
                                          block: {
                                            type: 'math_number',
                                            id: 'num4',
                                            fields: { NUM: 2 }
                                          }
                                        }
                                      },
                                      next: {
                                        block: {
                                          type: 'control_forever',
                                          id: 'forever1',
                                          inputs: {
                                            BODY: {
                                              block: {
                                                type: 'motion_move',
                                                id: 'move1',
                                                inputs: {
                                                  STEPS: {
                                                    block: {
                                                      type: 'math_number',
                                                      id: 'num5',
                                                      fields: { NUM: 3 }
                                                    }
                                                  }
                                                },
                                                next: {
                                                  block: {
                                                    type: 'motion_turn_cw',
                                                    id: 'turn1',
                                                    inputs: {
                                                      DEGREES: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'num6',
                                                          fields: { NUM: 1 }
                                                        }
                                                      }
                                                    },
                                                    next: {
                                                      block: {
                                                        type: 'var_change',
                                                        id: 'var_change1',
                                                        fields: { NAME: 'счёт' },
                                                        inputs: {
                                                          DELTA: {
                                                            block: {
                                                              type: 'math_number',
                                                              id: 'num7',
                                                              fields: { NUM: 1 }
                                                            }
                                                          }
                                                        },
                                                        next: {
                                                          block: {
                                                            type: 'control_if',
                                                            id: 'if1',
                                                            inputs: {
                                                              COND: {
                                                                block: {
                                                                  type: 'sensing_touching_edge',
                                                                  id: 'touch1'
                                                                }
                                                              },
                                                              BODY: {
                                                                block: {
                                                                  type: 'motion_bounce_edge',
                                                                  id: 'bounce1'
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      // === Script 2: Key pressed — move with arrow keys ===
      {
        type: 'event_key_pressed',
        id: 'key1',
        x: 50,
        y: 500,
        fields: { KEY: 'ArrowUp' },
        inputs: {
          BODY: {
            block: {
              type: 'motion_move',
              id: 'move_up',
              inputs: {
                STEPS: {
                  block: {
                    type: 'math_number',
                    id: 'num_up',
                    fields: { NUM: 15 }
                  }
                }
              }
            }
          }
        }
      },
      {
        type: 'event_key_pressed',
        id: 'key2',
        x: 50,
        y: 600,
        fields: { KEY: 'ArrowDown' },
        inputs: {
          BODY: {
            block: {
              type: 'motion_move',
              id: 'move_down',
              inputs: {
                STEPS: {
                  block: {
                    type: 'math_number',
                    id: 'num_down',
                    fields: { NUM: -15 }
                  }
                }
              }
            }
          }
        }
      },
      {
        type: 'event_key_pressed',
        id: 'key3',
        x: 350,
        y: 500,
        fields: { KEY: 'ArrowLeft' },
        inputs: {
          BODY: {
            block: {
              type: 'motion_turn_ccw',
              id: 'turn_left',
              inputs: {
                DEGREES: {
                  block: {
                    type: 'math_number',
                    id: 'num_left',
                    fields: { NUM: 15 }
                  }
                }
              }
            }
          }
        }
      },
      {
        type: 'event_key_pressed',
        id: 'key4',
        x: 350,
        y: 600,
        fields: { KEY: 'ArrowRight' },
        inputs: {
          BODY: {
            block: {
              type: 'motion_turn_cw',
              id: 'turn_right',
              inputs: {
                DEGREES: {
                  block: {
                    type: 'math_number',
                    id: 'num_right',
                    fields: { NUM: 15 }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  variables: [
    {
      name: 'счёт',
      id: 'var_1'
    }
  ]
}
