Feature: Procesar deducible

  Scenario Outline: Póliza con deducible texto plano
    Given la poliza tiene un deducible en forma del <texto>
    When ejecutamos el conversor de deducible
    Then obtenemos la parametrización del deducible en <detalle>

  Examples:
    | texto       | detalle       |
    | D10Request  | D10Response   |
    | D86Request  | D86Response   |
    | D88Request  | D88Response   |
    | D314Request | D314Response  |
    | D1256Request| D1256Response |
    